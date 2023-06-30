class ImageLoader {
    constructor() {
        this.numberInput1 = document.getElementById("number1");
        this.numberInput2 = document.getElementById("number2");
        this.submitBtn = document.getElementById("submitBtn");
        this.notificationEl = document.getElementById("notification");
        this.imageContainer = document.getElementById('imageContainer');

        this.submitBtn.addEventListener('click', this.handleBtnClick.bind(this));
    }

    handleBtnClick() {
        let number1 = parseFloat(this.numberInput1.value);
        let number2 = parseFloat(this.numberInput2.value);

        if (isNaN(number1) || isNaN(number2) || number1 < 100 || number1 > 300 || number2 < 100 || number2 > 300) {
            this.showNotification("Одно из чисел вне диапазона от 100 до 300");
        } else {
            let url = "https://picsum.photos/" + number1 + "/" + number2;
            fetch(url)
                .then((response) => {
                    if (response.ok) {
                        return response.blob();
                    }
                    throw new Error("Ошибка привыполнении запроса");
                })
                .then((blob) => {
                    let img = document.createElement("img");
                    img.src = URL.createObjectURL(blob);
                    this.imageContainer.appendChild(img);
                    this.showNotification("");
                })
                .catch((error) => {
                    console.log("Возникла ошибка: " +error.message);
                    this.showNotification("Возникла ошибка: " +error.message);
                });
        }
    }

    showNotification(message) {
        this.notificationEl.textContent = message;
    }
}

const imageLoader = new ImageLoader();
