import { KeyValuePair } from "src/app/models/keyValuePair";
import { Contact } from "src/app/models/contact";

export interface Vehicle {
    id: number;
    model: KeyValuePair;
    make: KeyValuePair;
    isRegistered: boolean;
    features: KeyValuePair[];
    contact: Contact;
    lastUpdate: string;
}