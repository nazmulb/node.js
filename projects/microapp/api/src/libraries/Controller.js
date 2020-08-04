/**
 * Abstract Controller Class
 */
class Controller {
  /**
   * Abstract
   */
  constructor() {
    if (new.target === Controller) {
      throw new Error('Controller can\'t be instantiated directly.');
    }
  }

  /**
   * Index
   * @param {object} req - request object
   * @param {object} res - response object
   * @return {json}
   * @example
   *      ic.index();
   */
  index(req, res) {
    return res.json({ message: 'Welcome!' });
  }
}

module.exports = Controller;
