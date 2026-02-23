import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { User } from '../../infrastructure/entities/user.entity';
import { LoginDto, SignupDto } from './dto/auth.dto';
export declare class AuthService {
    private userRepository;
    private jwtService;
    constructor(userRepository: Repository<User>, jwtService: JwtService);
    signup(signupDto: SignupDto): Promise<{
        accessToken: string;
        user: {
            id: string;
            email: string;
            firstName: string;
            lastName: string;
        };
    }>;
    login(loginDto: LoginDto): Promise<{
        accessToken: string;
        user: {
            id: string;
            email: string;
            firstName: string;
            lastName: string;
        };
    }>;
    validateUser(payload: any): Promise<User>;
}
