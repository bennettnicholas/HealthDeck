export function getCurrentData() {
    return fetch(
      'https://us-central1-aiot-fit-xlab.cloudfunctions.net/healthdecklastreading', 
      {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
            "Content-Type": "application/json",
        }
      })
      .then(response  => response.json())
}