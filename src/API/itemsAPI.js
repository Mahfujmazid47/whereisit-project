export const myItemsPromise = (email, accessToken) => {
    return fetch(`https://b11a11-whereisit-server-side.vercel.app/itemsemail?email=${email}`, {
        headers : {
            authorization : `Bearer ${accessToken}`
        }
    })
    .then(res => res.json())
}