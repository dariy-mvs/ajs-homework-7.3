// TODO: write your code here

export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
  }

  translate(code) {
    const responseTextError = this.errors.get(code);
    if (responseTextError) {
      return responseTextError;
    } return 'Unknown error';
  }
}
