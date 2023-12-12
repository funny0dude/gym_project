import { Application, Router } from "express";
import { TypeormConnection } from "../database/TypeormConnection";
import { SubscriptionsRepo } from "./subscriptions-repo";
import { SubscriptionService } from "./service";
import { SubscriptionsController } from "./controller";

const subscriptionRepo = new SubscriptionsRepo(TypeormConnection);
const service = new SubscriptionService(subscriptionRepo);
const controller = new SubscriptionsController(service);

export const SubscriptionsRouter = Router();
SubscriptionsRouter.get("/:idSubscription", controller.getSubscription.bind(controller));
SubscriptionsRouter.delete("/:idSubscription", controller.deleteSubscription.bind(controller));
SubscriptionsRouter.post("/:idSubscription", controller.createSubscription.bind(controller));
SubscriptionsRouter.put("/:idSubscription", controller.updateSubscription.bind(controller));