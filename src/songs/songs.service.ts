import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {

  private readonly songs = []

  createSong(song: any) {
    this.songs.push(song)
    return this.songs
  }

  findAll(){
    throw new Error("Error in DB while fetching the record")
    // return this.songs
  }
}
