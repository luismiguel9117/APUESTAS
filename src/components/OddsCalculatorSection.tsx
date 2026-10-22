export const ODDS_CALCULATOR_HTML = `<section class="calculator margin-bottom">
	<div class="container">
		<div class="calculator-content" data-game-type="holdem">
			<ul class="calculator__tabs">
									<li
						class="is-active"
						data-game-type="holdem"
					>
						Hold’em					</li>
									<li
						class=""
						data-game-type="omaha"
					>
						Omaha					</li>
									<li
						class=""
						data-game-type="omaha-h/l"
					>
						Omaha H/L					</li>
									<li
						class=""
						data-game-type="7-stud"
					>
						7-Stud					</li>
									<li
						class=""
						data-game-type="7-stud-h/l"
					>
						7-Stud H/L					</li>
									<li
						class=""
						data-game-type="razz"
					>
						Razz					</li>
							</ul>
			<div class="calculator__table">
				<div class="calculator__table-body">
					<picture>
						<source
							media="(min-width: 1024px)"
							srcset="/assets/odds-calc/images/svg/poker-table-desktop.svg"
						/>
						<img decoding="async" src="/assets/odds-calc/images/svg/poker-table.svg" alt="calculator-table" />
					</picture>
					<div class="calculator__board">
						<div class="calculator__board-group">
							<div class="calculator__board-group-grid">
								<div class="calculator__card-slot"></div>
								<div class="calculator__card-slot"></div>
								<div class="calculator__card-slot"></div>
							</div>
							<div class="calculator__board-group-name">Flop</div>
						</div>
						<div class="calculator__board-group">
							<div class="calculator__board-group-grid">
								<div class="calculator__card-slot"></div>
							</div>
							<div class="calculator__board-group-name">Turn</div>
						</div>
						<div class="calculator__board-group">
							<div class="calculator__board-group-grid">
								<div class="calculator__card-slot"></div>
							</div>
							<div class="calculator__board-group-name">River</div>
						</div>
						<div class="calculator__board-reset"></div>
					</div>
				</div>
				<div class="calculator__players">
					<div class="calculator__players-item" data-player-id="1">
						<div class="calculator__player">
							<div class="calculator__player-name">Player 1</div>
							<div class="calculator__player-cards">
								<div class="calculator__card-slot"></div>
								<div class="calculator__card-slot"></div>
							</div>
							<div class="calculator__player-chances">
								<div class="calculator__player-chances-item">
									<div class="calculator__player-chances-item-value">0%</div>
									<div class="calculator__player-chances-item-name">Win</div>
								</div>
								<div class="calculator__player-chances-item">
									<div class="calculator__player-chances-item-value">0%</div>
									<div class="calculator__player-chances-item-name">Tie</div>
								</div>
							</div>
							<div class="calculator__player-controls">
								<div class="calculator__player-reset is-hidden"></div>
								<div class="calculator__player-close is-hidden"></div>
							</div>
						</div>
					</div>
					<div class="calculator__players-item" data-player-id="2">
						<div class="calculator__player">
							<div class="calculator__player-name">Player 2</div>
							<div class="calculator__player-cards">
								<div class="calculator__card-slot"></div>
								<div class="calculator__card-slot"></div>
							</div>
							<div class="calculator__player-chances">
								<div class="calculator__player-chances-item">
									<div class="calculator__player-chances-item-value">0%</div>
									<div class="calculator__player-chances-item-name">Win</div>
								</div>
								<div class="calculator__player-chances-item">
									<div class="calculator__player-chances-item-value">0%</div>
									<div class="calculator__player-chances-item-name">Tie</div>
								</div>
							</div>
							<div class="calculator__player-controls">
								<div class="calculator__player-reset is-hidden"></div>
								<div class="calculator__player-close is-hidden"></div>
							</div>
						</div>
					</div>
					<div class="calculator__players-item" data-player-id="3">
						<div class="calculator__player-add">Add Player</div>
					</div>
					<div class="calculator__players-item" data-player-id="4">
						<div class="calculator__player-add">Add Player</div>
					</div>
					<div class="calculator__players-item" data-player-id="5">
						<div class="calculator__player-add">Add Player</div>
					</div>
					<div class="calculator__players-item" data-player-id="6">
						<div class="calculator__player-add">Add Player</div>
					</div>
					<div class="calculator__players-item" data-player-id="7">
						<div class="calculator__player-add">Add Player</div>
					</div>
				</div>
			</div>
			<div class="calculator__controls">
				<button class="calculator__controls-btn calculator__player-add" type="button">
					Add Player				</button>
				<div class="calculator__modal">
					<div class="calculator__modal-content">
						<div class="calculator__modal-close"></div>
						<div class="calculator__modal-title">Player 1</div>
						<div class="calculator__modal-cards">
							<div class="calculator__player-cards">
								<div class="calculator__card-slot"></div>
								<div class="calculator__card-slot"></div>
							</div>
							<div class="calculator__board is-hidden">
								<div class="calculator__board-group">
									<div class="calculator__board-group-grid">
										<div class="calculator__card-slot"></div>
										<div class="calculator__card-slot"></div>
										<div class="calculator__card-slot"></div>
									</div>
								</div>
								<div class="calculator__board-group">
									<div class="calculator__board-group-grid">
										<div class="calculator__card-slot"></div>
									</div>
								</div>
								<div class="calculator__board-group">
									<div class="calculator__board-group-grid">
										<div class="calculator__card-slot"></div>
									</div>
								</div>
							</div>
						</div>
						<div class="calculator__cards">
							<div class="calculator__cards-group">
								<div
									class="calculator__card"
									data-rank="2"
									data-suit="spades"
								>
									2
								</div>
								<div
									class="calculator__card"
									data-rank="3"
									data-suit="spades"
								>
									3
								</div>
								<div
									class="calculator__card"
									data-rank="4"
									data-suit="spades"
								>
									4
								</div>
								<div
									class="calculator__card"
									data-rank="5"
									data-suit="spades"
								>
									5
								</div>
								<div
									class="calculator__card"
									data-rank="6"
									data-suit="spades"
								>
									6
								</div>
								<div
									class="calculator__card"
									data-rank="7"
									data-suit="spades"
								>
									7
								</div>
								<div
									class="calculator__card"
									data-rank="8"
									data-suit="spades"
								>
									8
								</div>
								<div
									class="calculator__card"
									data-rank="9"
									data-suit="spades"
								>
									9
								</div>
								<div
									class="calculator__card"
									data-rank="10"
									data-suit="spades"
								>
									T
								</div>
								<div
									class="calculator__card"
									data-rank="jack"
									data-suit="spades"
								>
									J
								</div>
								<div
									class="calculator__card"
									data-rank="queen"
									data-suit="spades"
								>
									Q
								</div>
								<div
									class="calculator__card"
									data-rank="king"
									data-suit="spades"
								>
									K
								</div>
								<div
									class="calculator__card"
									data-rank="ace"
									data-suit="spades"
								>
									A
								</div>
							</div>
							<div class="calculator__cards-group">
								<div
									class="calculator__card"
									data-rank="2"
									data-suit="hearts"
								>
									2
								</div>
								<div
									class="calculator__card"
									data-rank="3"
									data-suit="hearts"
								>
									3
								</div>
								<div
									class="calculator__card"
									data-rank="4"
									data-suit="hearts"
								>
									4
								</div>
								<div
									class="calculator__card"
									data-rank="5"
									data-suit="hearts"
								>
									5
								</div>
								<div
									class="calculator__card"
									data-rank="6"
									data-suit="hearts"
								>
									6
								</div>
								<div
									class="calculator__card"
									data-rank="7"
									data-suit="hearts"
								>
									7
								</div>
								<div
									class="calculator__card"
									data-rank="8"
									data-suit="hearts"
								>
									8
								</div>
								<div
									class="calculator__card"
									data-rank="9"
									data-suit="hearts"
								>
									9
								</div>
								<div
									class="calculator__card"
									data-rank="10"
									data-suit="hearts"
								>
									T
								</div>
								<div
									class="calculator__card"
									data-rank="jack"
									data-suit="hearts"
								>
									J
								</div>
								<div
									class="calculator__card"
									data-rank="queen"
									data-suit="hearts"
								>
									Q
								</div>
								<div
									class="calculator__card"
									data-rank="king"
									data-suit="hearts"
								>
									K
								</div>
								<div
									class="calculator__card"
									data-rank="ace"
									data-suit="hearts"
								>
									A
								</div>
							</div>
							<div class="calculator__cards-group">
								<div
									class="calculator__card"
									data-rank="2"
									data-suit="diamonds"
								>
									2
								</div>
								<div
									class="calculator__card"
									data-rank="3"
									data-suit="diamonds"
								>
									3
								</div>
								<div
									class="calculator__card"
									data-rank="4"
									data-suit="diamonds"
								>
									4
								</div>
								<div
									class="calculator__card"
									data-rank="5"
									data-suit="diamonds"
								>
									5
								</div>
								<div
									class="calculator__card"
									data-rank="6"
									data-suit="diamonds"
								>
									6
								</div>
								<div
									class="calculator__card"
									data-rank="7"
									data-suit="diamonds"
								>
									7
								</div>
								<div
									class="calculator__card"
									data-rank="8"
									data-suit="diamonds"
								>
									8
								</div>
								<div
									class="calculator__card"
									data-rank="9"
									data-suit="diamonds"
								>
									9
								</div>
								<div
									class="calculator__card"
									data-rank="10"
									data-suit="diamonds"
								>
									T
								</div>
								<div
									class="calculator__card"
									data-rank="jack"
									data-suit="diamonds"
								>
									J
								</div>
								<div
									class="calculator__card"
									data-rank="queen"
									data-suit="diamonds"
								>
									Q
								</div>
								<div
									class="calculator__card"
									data-rank="king"
									data-suit="diamonds"
								>
									K
								</div>
								<div
									class="calculator__card"
									data-rank="ace"
									data-suit="diamonds"
								>
									A
								</div>
							</div>
							<div class="calculator__cards-group">
								<div class="calculator__card" data-rank="2" data-suit="clubs">
									2
								</div>
								<div class="calculator__card" data-rank="3" data-suit="clubs">
									3
								</div>
								<div class="calculator__card" data-rank="4" data-suit="clubs">
									4
								</div>
								<div class="calculator__card" data-rank="5" data-suit="clubs">
									5
								</div>
								<div class="calculator__card" data-rank="6" data-suit="clubs">
									6
								</div>
								<div class="calculator__card" data-rank="7" data-suit="clubs">
									7
								</div>
								<div class="calculator__card" data-rank="8" data-suit="clubs">
									8
								</div>
								<div class="calculator__card" data-rank="9" data-suit="clubs">
									9
								</div>
								<div
									class="calculator__card"
									data-rank="10"
									data-suit="clubs"
								>
									T
								</div>
								<div
									class="calculator__card"
									data-rank="jack"
									data-suit="clubs"
								>
									J
								</div>
								<div
									class="calculator__card"
									data-rank="queen"
									data-suit="clubs"
								>
									Q
								</div>
								<div
									class="calculator__card"
									data-rank="king"
									data-suit="clubs"
								>
									K
								</div>
								<div
									class="calculator__card"
									data-rank="ace"
									data-suit="clubs"
								>
									A
								</div>
							</div>
						</div>
						<div class="calculator__modal-btns">
							<button
								class="calculator__modal-done button is-disabled"
								type="button"
							>
								Done							</button>
							<button
								class="calculator__modal-reset button button_ghost is-disabled"
								type="button"
							>
								Reset							</button>
						</div>
					</div>
				</div>
				<button
					class="calculator__controls-btn calculator__controls-btn-reset is-disabled"
					type="button"
				>
					Reset Cards				</button>
			</div>
		</div>
	</div>
</section>`;
