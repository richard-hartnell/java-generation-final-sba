package org.skillgrowth.java_web_final_project.controller;

import org.skillgrowth.java_web_final_project.model.Game;
import org.skillgrowth.java_web_final_project.service.GameService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@ResponseBody
@RequestMapping("/")
public class GameController {

    private GameService gameService;

    public GameController(GameService gameService1){
        gameService = gameService1;
    }

    @GetMapping("/")
    public List<Game> findAll() {
        return gameService.findAll();
    }

    @CrossOrigin
    @PostMapping("/")
    public void saveGame(@RequestBody Game game) {
        gameService.save(game);
    }

    @CrossOrigin
    @DeleteMapping("/{id}")
    public void deleteGame(@PathVariable Long id) {
    gameService.delete(id);
    }

    @CrossOrigin
    @PutMapping("/{id}")
    public void putGame(@PathVariable Long id, @RequestBody Game game) {
        putGame(id, game);
    }
}