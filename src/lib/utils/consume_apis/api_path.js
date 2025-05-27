async function fetchPaths() {
    try {
        const response = (await fetch("/api/paths"))
        const data = await response.json();
        if (data && data.success) {
            return data.data
        } else {
            throw ('Paths not found')
        }
    } catch (error) {
        return []
    }
}

async function fetchPathBySlug(slug) {
    if (!slug) throw ('Invalid post slug');
    try {
        const response = (await fetch(process.env.HOST + "/api/paths/" + slug))
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

export { fetchPathBySlug, fetchPaths }
