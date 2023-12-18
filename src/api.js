export async function getData() {
    try {
        const request = await fetch(`api/van`)
        const response = request.json()
        return response
    } catch (error) {
        console.log(error);
    }
    
}