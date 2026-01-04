import * as Linking from "expo-linking";
import { openAuthSessionAsync } from "expo-web-browser";
import { Account, Avatars, Client, OAuthProvider } from "react-native-appwrite";

export const config = {
    platform: "com.restate",
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
}

export const client = new Client();

client
.setEndpoint(config.endpoint!)
.setProject(config.projectId!)
.setPlatform(config.platform)

export const avatar = new Avatars(client);
export const account = new Account(client);

export async function login() {
    try {
        const redirectUri = Linking.createURL("/");

        const authUrl = account.createOAuth2Session({
            provider: OAuthProvider.Google,
            success: redirectUri,
            failure: redirectUri
        });
        if (!authUrl) throw new Error("Failed to login");

        const result = await openAuthSessionAsync(authUrl.toString(), redirectUri);

        if (result.type !== "success") {
            throw new Error("Login cancelled");
        }
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