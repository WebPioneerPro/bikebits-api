import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Health')
@Controller('health')
export class HealthController {
    @Get()
    @ApiOperation({ summary: 'Run health check' })
    @ApiResponse({ status: 200, description: 'The health check has been successful.' })
    check() {
        return { status: 'ok', timestamp: new Date().toISOString() };
    }
}
