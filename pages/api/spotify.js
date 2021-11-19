import querystring from 'querystring';


const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;



export const getNowPlaying = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer BQApUB-DbqNwPB3rlIhieR5XVSI8pBw8mkVih0KGhl82NO4ZDjqW2paWGrBq6xeEbUXazBu4rrtlRxYp55tAzFfIywHyrjMumNtczC75RjLt8b7KSQTWVJ7jcBWPMMBOi1ED2zXc8aPScLhIUWYGyvEm64y-BiXTyLDG1Acm");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };

    return await fetch("https://api.spotify.com/v1/me/player/currently-playing", requestOptions)
};

export default async (_, res) => {
    const response = await getNowPlaying();

    if (response.status === 204 || response.status > 400) {
        return res.status(200).json({ isPlaying: false });
    }

    const song = await response.json();
    const isPlaying = song.is_playing;
    const title = song.item.name;
    const artist = song.item.artists.map((_artist) => _artist.name).join(', ');
    const album = song.item.album.name;
    const albumImageUrl = song.item.album.images[0].url;
    const songUrl = song.item.external_urls.spotify;

    return res.status(200).json({
        album,
        albumImageUrl,
        artist,
        isPlaying,
        songUrl,
        title,
    });
};