import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from '../../infrastructure/entities/user.entity';
import { LoginDto, SignupDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
        private jwtService: JwtService,
    ) { }

    async signup(signupDto: SignupDto) {
        const { email, password, firstName, lastName } = signupDto;

        const existingUser = await this.userRepository.findOne({ where: { email } });
        if (existingUser) {
            throw new ConflictException('Email already exists');
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = this.userRepository.create({
            email,
            password: hashedPassword,
            firstName,
            lastName,
        });

        await this.userRepository.save(user);

        return this.login({ email, password });
    }

    async login(loginDto: LoginDto) {
        const { email, password } = loginDto;
        const user = await this.userRepository.findOne({ where: { email } });

        if (user && (await bcrypt.compare(password, user.password))) {
            const payload = { email: user.email, sub: user.id };
            return {
                accessToken: this.jwtService.sign(payload),
                user: {
                    id: user.id,
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName,
                },
            };
        }

        throw new UnauthorizedException('Invalid credentials');
    }

    async validateUser(payload: any) {
        return await this.userRepository.findOne({ where: { id: payload.sub } });
    }
}
