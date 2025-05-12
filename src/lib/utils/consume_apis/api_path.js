async function fetchPathBySlug(slug) {
    if (!slug) throw ('Invalid post slug');
    try {
        const response = (await fetch((process.env.HOST || 'http://localhost:3000') + "/api/paths/" + slug))
        const data = await response.json();
        if (data && data.success) {
            return data.data
        } else {
            throw ('Path not found')
        }
    } catch (error) {
        console.log(error)
        return null
    }
}

export { fetchPathBySlug }