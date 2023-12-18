export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'b1c377d4d4msh539182d49efdf06p13ec52jsnba32cd0c0b16',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'b1c377d4d4msh539182d49efdf06p13ec52jsnba32cd0c0b16',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options)
    const data = response.json()

    return data
}