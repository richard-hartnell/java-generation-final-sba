package org.skillgrowth.java_web_final_project.service;

import org.skillgrowth.java_web_final_project.model.Game;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GameService {
    public final GameRepository gameRepository;

    public GameService(GameRepository repository) {
        gameRepository = repository;
    }

    public List<Game> findAll(){
        return gameRepository.findAll();
    }
    public void save(Game game){
        gameRepository.save(game);
    }

    public void put(Game game){
        Long id = game.getId();
        Game foundGame = gameRepository.getReferenceById(id);
        foundGame.setGenre(game.getGenre());
        foundGame.setYear(game.getYear());
        foundGame.setName(game.getName());
        gameRepository.save(foundGame);
    }


    public void delete(Long id) {
        gameRepository.deleteById(id);
    }
}