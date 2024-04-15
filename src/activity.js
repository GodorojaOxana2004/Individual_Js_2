/**
 * Эта функция делает запрос к API и получает случайную активность.
 * @async
 * @return {Promise<string>} Возвращает промис, который разрешается в строку, представляющую активность.
 * @throws {Error} Если происходит ошибка при получении данных из API, выводит ошибку в консоль и возвращает строку об ошибке.
 */
async function getRandomActivity() {
      return fetch('https://www.boredapi.com/api/activity/')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => data.activity)
        .catch(error => {
            console.error(error);
            return "К сожалению, произошла ошибка";
        });
}

/**
 * Эта функция обновляет текст активности на странице, получая новую активность из функции getRandomActivity.
 */
async function updateActivity() {
    let activity = await getRandomActivity();
    document.getElementById('activity').textContent = activity;
}

/**
 * Эта функция начинает обновление активности каждую минуту.
 */
function startUpdatingActivity() {
    updateActivity();
    setTimeout(startUpdatingActivity, 60000);
}
