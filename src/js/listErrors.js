class ErrorRepository {
	constructor() {
		this.mapError = new Map([
			[403, "Доступ запрещен"],
			[404, "Файл не найден"], 
			[500, "Ошибка сервера"]
		]);
	}

	add(error) {
		this.mapError.set(error[0], error[1]);
	}

	translate(error) {
		if(!this.mapError.has(error)) {
			return "Unknown error";
		}

		return this.mapError.get(error)
	}
}


export default ErrorRepository;





