

const notificationController = require("../controllers/notification.controller")
module.exports = (app) => {
    /**
     * Insert a new notification request
     * POST /notiserv/api/v1/notifications
     */
    app.post("/notiserv/api/v1/notifications", notificationController.acceptNotificationRequest)

    /**
     * Getting the notification status -> if the mail notification was sent or not
     * 
     * GET /notiserv/api/v1/notifications/2161fs611615dsfadf56
     */
    app.get("/notiserv/api/v1/notifications/:id", notificationController.getNotificationDetails)
}
