const hpUrl = process.env.HARRY_POTTER_API_URL;

async function getApiData(path) {
    const response = await fetch(`${hpUrl}${path}`);
    const data = await response.json();
    return data;
};

module.exports = {
    getApiData
};