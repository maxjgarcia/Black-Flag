import { Client, Databases } from 'appwrite';

export const client = new Client();
const databases = new Databases(client);

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6779bc14003031393239');

export const getTeams = async () => {
    try {
        const response = await databases.listDocuments(
            '677a5ceb003dd755522a', // database ID
            '677a5f18001b614dc400' // collection ID 
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
            '677a5ceb003dd755522a', //  database ID
            '677a5d17001217466973' // collection ID 
        );
        return response.documents;
    } catch (error) {
        console.error('Error fetching match data: ', error);
        return [];
    }
};


