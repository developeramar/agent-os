function getRecommendations(
    matches
) {

    return matches.filter(
        job => job.shouldApply === true
    );

}

module.exports = {
    getRecommendations
};