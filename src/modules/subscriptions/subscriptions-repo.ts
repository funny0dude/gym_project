import { DataSource } from "typeorm";
import { Subscription } from "../database/entities/Subscription.entity";

export class SubscriptionsRepo {
  constructor(private readonly connection: DataSource) {}

  async getSubscription(idSubscription: number) {
    const subscriptions = await this.connection
      .createQueryBuilder(Subscription, "subscription")
      .where("subscription.id = :idSubscription", { idSubscription })
      .getOne();
    return subscriptions;
  }

  async deleteSubscription(subscription: Subscription) {
    await this.connection.getRepository(Subscription).remove(subscription);
  }

  async insertSubscription(subscription: Subscription) { 
    await this.connection.createEntityManager().save(subscription);
  }

  async updateSubscription(subscription: Subscription) { 
    await this.connection.createEntityManager().save(subscription);
  }
}