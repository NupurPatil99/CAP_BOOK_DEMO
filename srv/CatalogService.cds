using {sap.capire.bookshop as my} from '../db/schema';

service CatlogService {
    @requires :'USA_USER'
 @restrict:[{
    grant:'READ',
    where:'currency_code=''USD'''
 }] 

 entity Books as projection on my.Books;
 
 
 @requires:'aunthenticated-user'
 entity Authors as projection on my.Authors;

}
