import { Controller, Get, Put, Delete, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song.dto';

@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}

  @Post()
  createSong(@Body() createSongDTO: CreateSongDTO){
    return this.songsService.createSong(createSongDTO)
  }

  @Get()
  findAll(){
    try {
      return this.songsService.findAll()
    } catch (e){
      throw new HttpException('server error', HttpStatus.INTERNAL_SERVER_ERROR, {cause: e})
    }
  }
  @Get(':id')
  findOne() {
    return 'find song based on id'
  }

  @Put(':id')
  updateOne() {
    return 'update song based on id'
  }

  @Delete(':id')
  deleteOne() {
    return 'delete song based on id'
  }
}
