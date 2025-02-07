import { Client, Databases } from 'appwrite';
import 'dotenv/config'

const SERVER_ENDPOINT = process.env.SERVER_ENDPOINT
const SERVER_PROJECT = process.env.SERVER_PROJECT
const DATABASE = process.env.DATABASE
const COLLECTION_TEAMS = process.env.COLLECTION_TEAMS
const COLLECTION_RESULTS = process.env.COLLECTION_RESULTS
const COLLECTION_PLAYERS = process.env.COLLECTION_PLAYERS
const COLLECTION_COUNTDOWN = process.env.COLLECTION_COUNTDOWN

if (!SERVER_ENDPOINT || !SERVER_PROJECT || !DATABASE || !COLLECTION_TEAMS || !COLLECTION_RESULTS || !COLLECTION_PLAYERS || !COLLECTION_COUNTDOWN) {
    throw new Error("One or more environment variables are missing.");
}

export const client = new Client();
const databases = new Databases(client);

client
    .setEndpoint(SERVER_ENDPOINT)
    .setProject(SERVER_PROJECT);

export const getTeams = async () => {
    try {
        const response = await databases.listDocuments(
            DATABASE, // database ID
            COLLECTION_TEAMS // collection ID 
        );
        return response.documents;
    } catch (error) {
        console.error('Error fetching teams: ', error);
        return [];
    }
};

export const getMatchResults = async () => {
    try {
        const response = await databases.listDocuments(
            DATABASE, //  database ID
            COLLECTION_RESULTS // collection ID 
        );
        return response.documents;
    } catch (error) {
        console.error('Error fetching match data: ', error);
        return [];
    }
};

export const getPlayers = async () => {
    try {
        const response = await databases.listDocuments(
            DATABASE, //  database ID
            COLLECTION_PLAYERS // collection ID 
        );
        return response.documents;
    } catch (error) {
        console.error('Error fetching players data: ', error);
        return [];
    }
};

export const getCountdown = async () => {
    try {
        const response = await databases.listDocuments(
            DATABASE, //  database ID
            COLLECTION_COUNTDOWN // collection ID 
        );
        return response.documents;
    } catch (error) {
        console.error('Error fetching countdown data: ', error);
        return [];
    }
};


