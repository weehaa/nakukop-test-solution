const getJSONData = async (url): Promise<any> => {
    const response = await fetch(url)
    return await response.json()
}

export default getJSONData