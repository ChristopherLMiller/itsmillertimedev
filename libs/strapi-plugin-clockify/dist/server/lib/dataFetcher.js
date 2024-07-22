"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataFetcher = void 0;
const dataFetcher = async (path, method, data) => {
    const url = `https://api.clockify.me/api/v1${path}`;
    const response = await fetch(url, {
        method,
        headers: {
            "X-Api-Key": process.env.CLOCKIFY_API_KEY,
            "Content-Type": "application/json",
        },
        body: data ? JSON.stringify(data) : undefined,
    });
    return response.json();
};
exports.dataFetcher = dataFetcher;
