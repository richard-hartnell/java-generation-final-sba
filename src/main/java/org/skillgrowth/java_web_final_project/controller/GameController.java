package org.skillgrowth.java_web_final_project.controller;

import org.skillgrowth.java_web_final_project.model.Game;
import org.skillgrowth.java_web_final_project.service.GameService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@ResponseBody
@RequestMapping("/")
public class GameController {

    private final GameService gameService;

    public GameController(GameService gameService1){
        gameService = gameService1;
    }

    @GetMapping
    public List<Game> findAll() {
        return gameService.findAll();
    }

    @PostMapping("/games")
    public void saveGame(@RequestBody Game game) {
        gameService.save(game);
    }

    @DeleteMapping("/{id}")
    public void deleteGame(@PathVariable Long id) {
    gameService.delete(id);
    }

    @PutMapping("/{id}")

