import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "./Client.entity";
import { Subscription } from "./Subscription.entity";

@Entity({ name: "public.subscriptions" })
export class ClientSubscription {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  buy_date!: string;

  @ManyToOne(() => Client, (client) => client.сlientSubscriptionы)
  @JoinColumn({ name: "client_id" })
  client!: Client;

  @ManyToOne(() => Subscription, (subscription) => subscription.clientSubscriptions)
  @JoinColumn({ name: "subscription_id" })
  subscription!: Subscription;
}
