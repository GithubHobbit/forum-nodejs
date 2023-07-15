import { Request, Response } from 'express'

class ErrorController {
  error_404(req: Request, res: Response) {
    return res.render('error_404_view.ejs')
  }
}

export default new ErrorController()
