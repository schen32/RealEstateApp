import * as Linking from "expo-linking";
import { openAuthSessionAsync } from "expo-web-browser";
import { Account, Avatars, Client, Databases, OAuthProvider } from "react-native-appwrite";

export const config = {
    platform: "com.restate",
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
    databaseId: process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID,
    agentsTableId: process.env.EXPO_PUBLIC_APPWRITE_AGENTS_TABLE_ID,
    propertiesTableId: process.env.EXPO_PUBLIC_APPWRITE_PROPERTIES_TABLE_ID,
    reviewsTableId: process.env.EXPO_PUBLIC_APPWRITE_REVIEWS_TABLE_ID,
    galleriesTableId: process.env.EXPO_PUBLIC_APPWRITE_GALLERIES_TABLE_ID,
}

export const client = new Client();

client
.setEndpoint(config.endpoint!)
.setProject(config.projectId!)
.setPlatform(config.platform)

export const avatar = new Avatars(client);
export const account = new Account(client);
export const databases = new Databases(client);

export async function login() {
    try {
        const redirectUri = Linking.createURL("");

        const authUrl = account.createOAuth2Token({
            provider: OAuthProvider.Google,
            success: redirectUri,
            failure: redirectUri
        });
        if (!authUrl) throw new Error("Failed to login");

        const result = await openAuthSessionAsync(authUrl.toString(), redirectUri);

        if (result.type !== "success") {
            throw new Error("Login cancelled");
        }

        const url = new URL(result.url);
        const secret = url.searchParams.get("secret")?.toString();
        const userId = url.searchParams.get("userId")?.toString();
        if (!secret || !userId) throw new Error("Failed to Login");

        const session = await account.createSession({
            userId: userId,
            secret: secret
        });
        if (!session) throw new Error("Failed to create session");

        return true;

    } catch (error) {
        console.error("Login error:", error);
        return false;
    }
}

export async function logout() {
    try {
        await account.deleteSession({
            sessionId: "current"
        });
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export async function getCurrentUser() {
    try {
        const response = await account.get();

        if (response.$id) {
            const userAvatar = avatar.getInitials({
                name: response.name
            });

            return {
                ...response,
                avatar: userAvatar.toString()
            }
        }
    } catch (error) {
        console.error(error);
        return null;
    }
}