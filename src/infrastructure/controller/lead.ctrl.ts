import { Request, Response } from "express";
import { LeadCreate } from "../../application/lead.create";

// RESTRICCIONES DE WHATSAPP(POLITICA SPAM)
//https://faq.whatsapp.com/652901706468344/?helpref=hc_fnav 
class LeadCtrl {
  constructor(private readonly leadCreator: LeadCreate) {}

  public sendCtrl = async ({ body }: Request, res: Response) => {
    const { message, phone } = body;
    const response = await this.leadCreator.sendMessageAndSave({ message, phone })
    res.send(response);
  };
}

export default LeadCtrl;
