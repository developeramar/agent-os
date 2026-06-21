

const {
    getTopMatches
} = require("../agent/topMatchesAgent");


const {
    searchJobs: searchInternshalaJobs
} = require("../agent/jobSearchAgent");



function getPlatformName() {

    return "Internshala";

}

async function searchJobs(
    searchQuery
) {

    const jobs =
        await searchInternshalaJobs(
            searchQuery
        );

    return {
        success: true,
        platform: "Internshala",
        jobs: jobs.map(job => ({
            ...job,
            platform: "Internshala"
        }))
    };

}


async function getBestMatches(
    resumeProfile,
    searchQuery
) {

    const matches =
        await getTopMatches(
            resumeProfile,
            searchQuery
        );

    return {
        success: true,
        platform: "Internshala",
        matches: matches.map(job => ({
            ...job,
            platform: "Internshala"
        }))
    };

}


async function login() {

    return {
        success: true,
        platform: "Internshala"
    };

}

async function applyJob() {

    return {
        success: true,
        platform: "Internshala"
    };

}

module.exports = {
    getPlatformName,
    getBestMatches,
    searchJobs,
    login,
    applyJob
};