import ErrorRepository from "../listErrors.js";

test("request correct error", () => {
	const listErrors = new ErrorRepository();
	const received = listErrors.translate(404);
	const expected = "Файл не найден";

	expect(received).toBe(expected);
})



test("request unCorrect error", () => {
	const listErrors = new ErrorRepository();
	const received = listErrors.translate(502);
	const expected = "Unknown error";

	expect(received).toBe(expected);

})



test("add new error", () => {
	const listErrors = new ErrorRepository();
	listErrors.add([502, "Bad Gateway"]);
	
	const received = listErrors.translate(502);
	const expected = "Bad Gateway";

	expect(received).toBe(expected);
})
