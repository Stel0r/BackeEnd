import { Injectable , HttpService} from '@nestjs/common';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

@Injectable()
export class AppService {

  constructor(private http : HttpService){
    
  }
  

  getHello(): string {
    return 'Hello World!';
  }

  getChampion() : any{
    let response =this.http.get("https://ddragon.leagueoflegends.com/cdn/10.23.1/data/en_US/champion.json").pipe(map(respone => respone.data));
    return response;
    
  }
}
