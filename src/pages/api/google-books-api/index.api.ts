import axios from 'axios'

export default async function googleBooksApi(
    textInput: string,
    category: string
) {
    const API_KEY = process.env.GOOGLE_API_KEY
    if (category === 'all') {
        category = ''
    }
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${textInput}&subject=${category}&key=${API_KEY}`

    try {
        const response = await axios.get(apiUrl)
        return response.data
    } catch (error) {
        console.error('Erro ao chamar a API:', error)
    }
}
