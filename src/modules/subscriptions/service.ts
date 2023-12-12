import { Subscription } from "../database/entities/Subscription.entity";
import { SubscriptionsRepo } from "./subscriptions-repo";

export class SubscriptionService {
  constructor(private readonly subscriptionRepo: SubscriptionsRepo) {}

  async getSubscriptionInfo(idSubscription: number) {
    const subscription = await this.subscriptionRepo.getSubscription(idSubscription);
    if (!subscription) throw new Error("Абонимент не найден!");
    return subscription;
  }

  async deleteSubscription(idSubscription: number) {
    const subscription = await this.subscriptionRepo.getSubscription(idSubscription);
    if (!subscription) throw new Error("Абонимент не найден!");
    await this.subscriptionRepo.deleteSubscription(subscription);
  }

  async createSubscription(buy_date: string, program_id: number, duration_id: number) {
    const subscription = new Subscription()
    subscription.buy_date = buy_date;
    subscription.program_id = program_id;
    subscription.duration_id = duration_id;
    await this.subscriptionRepo.insertSubscription(subscription);
  }

  async updateSubscription(idSubscription: number, buy_date: string, program_id: number, duration_id: number) {
    const subscription = await this.subscriptionRepo.getSubscription(idSubscription);
    if (!subscription) throw new Error("Абонимент не найден!");
    subscription.buy_date = buy_date;
    subscription.program_id = program_id;
    subscription.duration_id = duration_id;
    await this.subscriptionRepo.updateSubscription(subscription);
  }
}