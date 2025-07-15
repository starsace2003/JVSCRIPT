
// $game = [
//     'team1' => 'Bayern Munich',
//     'team2' => 'Borrussia Dortmund',
//     'players' => [
//         [
//             'Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies',
//             'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnabry', 'Lewandowski'
//         ],
//         [
//             'Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi',
//             'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze'
//         ]
//     ],
//     'score' => '4:0',
//     'scored' => ['Davies', 'Muller', 'Lewandowski', 'Kimmich'],
//     'date' => 'Nov 9th, 2037',
//     'odds' => [
//         'team1' => 1.33,
//         'draw' => 3.25,
//         'team2' => 6.5
//     ]
// ];
// // 1. Tạo mảng cầu thủ cho mỗi đội
// $players1 = $game['players'][0];
// $players2 = $game['players'][1];

// // 2. Tách thủ môn và các cầu thủ còn lại cho team 1
// $gk = $players1[0];
// $fieldPlayers = array_slice($players1, 1);

// // 3. Mảng allPlayers gồm toàn bộ 22 cầu thủ
// $allPlayers = array_merge($players1, $players2);

// // 4. Mảng players1Final gồm cầu thủ Bayern + 3 cầu thủ mới
// $players1Final = array_merge($players1, ['Thiago', 'Coutinho', 'Perisic']);

// // 5. Tạo biến tỉ lệ kết quả trận đấu
// $team1 = $game['odds']['team1'];
// $draw = $game['odds']['draw'];
// $team2 = $game['odds']['team2'];

// // 6. Hàm printGoals nhận tên cầu thủ ghi bàn và in ra
// function printGoals(...$players) {
//     echo "Các cầu thủ ghi bàn: " . implode(', ', $players) . "<br>";
//     echo "Tổng số cầu thủ ghi bàn: " . count($players) . "<br>";
// }

// // Test hàm với dữ liệu game.scored
// printGoals(...$game['scored']);

// // 7. In ra đội chiến thắng (tỉ lệ chấp thấp hơn) không dùng if/else hoặc toán tử 3 ngôi
// $winner = [
//     $team1 < $team2 ? $game['team1'] : $game['team2'],
//     $team1 > $team2 ? $game['team2'] : $game['team1']
// ][0];
// echo "Đội chiến thắng: $winner\n";
// foreach ($game['scored'] as $index => $player) {
//     echo "Goal " . ($index + 1) . ": $player\n";
// }

// $oddsValues = array_values($game['odds']);
// $averageOdds = array_sum($oddsValues) / count($oddsValues);
// echo "Tỉ lệ trung bình kết quả trận đấu: $averageOdds<br>";

// echo "Tỉ lệ thắng của {$game['team1']}: {$game['odds']['team1']}<br>";

// echo "Tỉ lệ hòa of draw: {$game['odds']['draw']}\n";

// echo "Tỉ lệ thắng của {$game['team2']}: {$game['odds']['team2']}<br>   ";
// // 1. Tạo mảng các sự kiện trong trận đấu
// $gameEvents = [
//     17 => '⚽ GOAL',
//     36 => '🔁 Substitution',
//     47 => '⚽ GOAL',
//     61 => '🔁 Substitution',
//     64 => '🟨 Yellow card',
//     69 => '🟨 Yellow card',
//     70 => '🔁 Substitution',
//     72 => '🔁 Substitution',
//     76 => '⚽ GOAL',
//     80 => '⚽ GOAL',
//     92 => '🟥 Red card'
// ];

// // 1. Mảng các sự kiện khác nhau (không trùng nhau)
// $uniqueEvents = array_values(array_unique($gameEvents));
// echo "Các sự kiện khác nhau: " . implode(', ', $uniqueEvents) . "<br>";

// // 2. Xóa thẻ vàng phút 64
// unset($gameEvents[64]);

// // 3. In ra số sự kiện và trung bình mỗi 9 phút
// $eventCount = count($gameEvents);
// echo "$eventCount sự kiện xảy ra, trung bình mỗi " . round(90 / $eventCount) . " phút<br>";

// // 4. Lặp và in ra màn hình, đánh dấu hiệp 1/hiệp 2
// foreach ($gameEvents as $minute => $event) {
//     $half = $minute <= 45 ? 'FIRST HALF' : 'SECOND HALF';
//     echo "[$half] $minute: $event<br>";
// }
