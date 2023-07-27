import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  articles = [
    {
    "lien":"https://scontent.frba4-3.fna.fbcdn.net/v/t31.18172-8/14570809_376839762646957_1015371734714440786_o.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEpji0UVN1o9QMsQod4huO2NvRqh62h1RY29GqHraHVFvdYYq7BQNNXm2IgqW-pluI6QQjPsJZBo1PL7JAYuGEj&_nc_ohc=P98mGt-AxqkAX_b73Vq&_nc_ht=scontent.frba4-3.fna&oh=00_AfCEQLZTmAzs7txAnkLrsy03fakDAY60Vhfg7Q4DLbJ9Lw&oe=64E7890F",
    "prix":"89 Dhs",
    "description":"Acosarts Produits cosmétiques",
    "feedback":"3.5"
  },
    {
    "lien":"https://scontent.frba4-3.fna.fbcdn.net/v/t31.18172-8/14570809_376839762646957_1015371734714440786_o.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEpji0UVN1o9QMsQod4huO2NvRqh62h1RY29GqHraHVFvdYYq7BQNNXm2IgqW-pluI6QQjPsJZBo1PL7JAYuGEj&_nc_ohc=P98mGt-AxqkAX_b73Vq&_nc_ht=scontent.frba4-3.fna&oh=00_AfCEQLZTmAzs7txAnkLrsy03fakDAY60Vhfg7Q4DLbJ9Lw&oe=64E7890F",
    "prix":"19 Dhs",
    "description":"Acosarts Produits cosmétiques",
    "feedback":"3.5"
  },
    {
    "lien":"https://scontent.frba4-3.fna.fbcdn.net/v/t31.18172-8/14570809_376839762646957_1015371734714440786_o.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEpji0UVN1o9QMsQod4huO2NvRqh62h1RY29GqHraHVFvdYYq7BQNNXm2IgqW-pluI6QQjPsJZBo1PL7JAYuGEj&_nc_ohc=P98mGt-AxqkAX_b73Vq&_nc_ht=scontent.frba4-3.fna&oh=00_AfCEQLZTmAzs7txAnkLrsy03fakDAY60Vhfg7Q4DLbJ9Lw&oe=64E7890F",
    "prix":"99 Dhs",
    "description":"Acosarts Produits cosmétiques",
    "feedback":"2.5"
  },
    {
    "lien":"https://scontent.frba4-3.fna.fbcdn.net/v/t31.18172-8/14570809_376839762646957_1015371734714440786_o.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEpji0UVN1o9QMsQod4huO2NvRqh62h1RY29GqHraHVFvdYYq7BQNNXm2IgqW-pluI6QQjPsJZBo1PL7JAYuGEj&_nc_ohc=P98mGt-AxqkAX_b73Vq&_nc_ht=scontent.frba4-3.fna&oh=00_AfCEQLZTmAzs7txAnkLrsy03fakDAY60Vhfg7Q4DLbJ9Lw&oe=64E7890F",
    "prix":"79 Dhs",
    "description":"Acosarts Produits cosmétiques",
    "feedback":"1.5"
  },
]
  constructor() { }

}
