const { Controller } = require('../libraries');

/**
 * Index Controller Related Methods
 */
class IndexController extends Controller {
  /**
   * Health check
   * @param {object} req - request object
   * @param {object} res - response object
   * @return {json}
   * @example
   *      ic.healthz();
   */
  healthz(req, res) {
    return res.json({
      uptime: process.uptime(),
    });
  }
}

module.exports = IndexController;
