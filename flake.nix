{
  description = "rexk.github.io's flake";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-22.11";
    flake-utils.url = "github:numtide/flake-utils";

  };

  outputs = { nixpkgs, flake-utils, ... }:
    let
      utils = flake-utils;
    in
    utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
        nodejs = pkgs.nodejs-18_x;
      in
      {
        formatter = pkgs.nixpkgs-fmt;
        devShell = pkgs.mkShell {
          nativeBuildInputs = with pkgs; [
            nodejs
            nodejs.pkgs.pnpm
          ];
        };
      });
}

