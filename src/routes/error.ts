import { Router } from 'express'
import { ErrorController } from '../controllers/index'

export const error = Router().use('/404', ErrorController.error_404)
