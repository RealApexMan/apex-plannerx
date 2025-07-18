import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationFirebaseService } from '../adapter/authentication-firebase.service';
import { EmailAlreadyTakenError } from '@app/visitor/signup/domain/email-already-taken.error';
import { InvalidCredentialError } from '@app/visitor/login/domain/invalid-credential.error';

export type RegisterResponse = RegisterPayload | EmailAlreadyTakenError;
export type LoginResponse = LoginPayload | InvalidCredentialError;

interface RegisterPayload {
  jwtToken: string;
  jwtRefreshToken: string;
  expiresIn: string;
  userId: string;
}

interface LoginPayload {
  jwtToken: string;
  jwtRefreshToken: string;
  expiresIn: string;
  userId: string;
  isRegistered: boolean;
}

@Injectable({
  providedIn: 'root',
  useClass: AuthenticationFirebaseService,
})
export abstract class AuthenticationService {
  abstract register(
    email: string,
    password: string
  ): Observable<RegisterResponse>;

  abstract login(email: string, password: string): Observable<LoginResponse>;
    
  
    /**
   * @param refreshToken Le token de rafraîchissement (stocké localement après connexion).
   * @returns Un Observable contenant le nouveau `jwtToken` et le `userId` de l'utilisateur.
   */
  abstract refreshToken(refreshToken: string): Observable<{ jwtToken: string, userId: string }>;


}