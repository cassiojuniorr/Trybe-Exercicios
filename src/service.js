export const randowNumber = () => Math.floor(Math.random() * 100);

export const dogPic = async () => {
    const resp = await fetch('https://dog.ceo/api/breeds/image/random');
    const response = resp.json();
    return response;

}
