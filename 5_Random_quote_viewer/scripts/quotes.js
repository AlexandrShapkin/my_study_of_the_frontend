let quotes = [];

function Quote(name, image, quote){
    this.name = name;
    this.image = "./assets/" + image;
    this.quote = quote;
}

quotes.push(new Quote("Конфуций", "Confucius.png",
"Уважать всякого человека, как самого себя, и поступать с ним, как мы желаем, чтобы с нами поступали, — выше этого нет ничего."));

quotes.push(new Quote("Лао-Цзы", "Laozi.png",
"Оставайся в середине круга, и пусть все вещи следуют своим путем."));

quotes.push(new Quote("Эпиктет", "Epictet.png",
"Где человек находится противясь, там его тюрьма."));

quotes.push(new Quote("Омар Хайям", "Khayyam.png",
"О нас думают плохо лишь те, кто хуже нас, а те кто лучше нас, им просто не до нас."));

export {
    quotes
}