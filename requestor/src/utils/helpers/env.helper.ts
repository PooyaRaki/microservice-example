export const LoadEnvironment = async (): Promise<void> => {
    if (!process.env.NODE_ENV) {
        require('dotenv').config();
    }
}