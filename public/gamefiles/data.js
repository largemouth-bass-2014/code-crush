var keyIndex = {
  '0': 48,
  '1': 49,
  '2': 50,
  '3': 51,
  '4': 52,
  '5': 53,
  '6': 54,
  '7': 55,
  '8': 56,
  '9': 57,
  'a': 65,
  'b': 66,
  'c': 67,
  'd': 68,
  'e': 69,
  'f': 70,
  'g': 71,
  'h': 72,
  'i': 73,
  'j': 74,
  'k': 75,
  'l': 76,
  'm': 77,
  'n': 78,
  'o': 79,
  'p': 80,
  'q': 81,
  'r': 82,
  's': 83,
  't': 84,
  'u': 85,
  'v': 86,
  'w': 87,
  'x': 88,
  'y': 89,
  'z': 90,
  'A': 65,
  'B': 66,
  'C': 67,
  'D': 68,
  'E': 69,
  'F': 70,
  'G': 71,
  'H': 72,
  'I': 73,
  'J': 74,
  'K': 75,
  'L': 76,
  'M': 77,
  'N': 78,
  'O': 79,
  'P': 80,
  'Q': 81,
  'R': 82,
  'S': 83,
  'T': 84,
  'U': 85,
  'V': 86,
  'W': 87,
  'X': 88,
  'Y': 89,
  'Z': 90,
  ' ': 32,
  ';': 186,
  ':': 186,
  '=': 187,
  ',': 188,
  '<': 188,
  '>': 190,
  '.': 190,
  '/': 191,
  '[': 219,
  ']': 221,
  '{': 219,
  '}': 221,
  "'": 222,
  '"': 222,
  "|": 220,
  "+": 187,
  "-": 189,
  "@": 50,
  "&": 55,
  '%': 53,
  '*': 56,
  '$': 52,
  '_': 189,
  '?': 191,
  "(": 57,
  ")": 48,
  "^": 54,
  "!": 49,
  "#": 51,
 '\\': 220
};

var levelOneLines = [
'git init',
"p 7+3",
"def mission",
'gem install bcrypt',
"def boom",
'require sqlite3',
'print "explode"',
"m = 8*2",
"def sqr(x)",
'require faker',
"[1,3,4].length",
"return x*x",
'class Sudoku',
"r = 3%5",
"a = rand(300)}",
"name = gets.chomp",
'puts "Hi! #{name}"',
"line(8)",
'print "save the world"',
"line(5,'*')",
"def so_close",
'tree.age!',
"puts 'through your code'",
"Sudo-coooooode",
]

var levelTwoLines = [
'git checkout LEVEL2',
'SELECT * FROM artists',
"rand(2).times {",
"line(11,'+','=')",
'Class RubyRacer',
'until tree.dead?',
'@track = []',
'@basket = []',
'@length = length',
'state_of_cookie = "doughy"',
'class pirateShip',
'word = gets.chomp',
'@players = players',
'tree = OrangeTree.new',
'ARGV.each do |word|',
'vowels = %w(a e i o u)',
'puts "Sorry, answer is #{card.term}"',
'card_data.map { |card| Card.new(card) }',
'while tree.any_oranges?',
'word_sort(dictionary_list)',
'pig_latin_words << pig_latin(word)',
'p anagram(ARGV[0], ARGV[1])',
'@players_position = Hash.new',
'b=Bicycle.new({wheel_size: 26})',
'{wheel_size:29, tire_type:"Big"}',
'return word if vowels.include?(word[0])',
'SELECT f_name, l_name FROM Employees',
]


var levelThreeLines = [
'cohort[:name] = "Largemouth Bass"',
'expect(cohorts.size).to eq(1)',
'regex = /[1-9]/',
'Cohort.where("id = ?", self[:cohort_id]).first',
'expect(found_cohort).to be_a Cohort',
'self[:created_at] = DateTime.now',
'@old_attributes = @attributes.dup',
'def initialize(args={})',
'gem sqlite3 (1.3.7)',
'dictionary_list = []',
'attributes.symbolize_keys!',
'gem rspec-core (-> 3.1.0)',
'puts to_roman(55) == "LV"',
'cohorts = Cohort.where("name = ?", "Doge")',
'def dictionary_sort',
'Cohort.attribute_names.each do |name|',
'josh = 20.times{ puts "fuck" }',
'def initialize(board_string)',
"(5..10).each { |x| print x }",
'Cohort.find(1)[:name] == "Largemouth Bass"',
'expect(cohorts[1].last_name).to eq("Baker")',
'puts to_roman(68) == "LXVIII"',
'puts "Type a word: "',
'basket << tree.pick_an_orange!',
'cohort = Cohort.find(@cohort[:id])',
'@attributes[name] = attributes[name]',
'(1..6).group_by { |i| i%3 }',
'def initialize(players, length = 30)',
'puts [1,2,3,4].my_map { |i| i -= 1 }',
'CSVParser.push(@filename, @todo_list.tasks)',
'raw_data = [{term: "dog", definition: "woof!"}]'
]

var levelFourLines = [
'ruby todo.rb list:completed',
"/\\A\\s*\\z/ !~ line || nil",
'@csv_data << row_hash.values',
"{ 'a'=>'app', 'b'=>'cat', 'c'=>'doge' }",
'@all_rows, @all_columns = []',
'git commit -m "Josh is awesome!"',
'steps = (ENV["STEPS"] || 1).to_i',
"print 'c:\\books\\net\\apps'",
'attr_reader :players, :length',
'class_name = ActiveSupport::Inflector',
'var thisManyFucks = 0',
'Dir[APP_ROOT.join("app", "*.rb")]',
'require_relative "config/application"',
'class Person < ActiveRecord::Base',
'CSV.open(file, "wb") do |csv|',
'@argument = input[2..-1].join(" ")',
'%w[foo bar baz].first(2)',
"{ 'a'=>1, 'b'=>2, 'c'=>3 }",
'puts "Year #{tree.age} Report"',
'View.output("Created list, #{list.name}")',
'puts chessboard[7][0] == "W_Rook"',
'"#{self.title} | Status: #{self.is_complete?}"',
"%w[orange tree].any? { |word| word.length >= 4 }",
'puts table[3][2] == "Shooting Guard"',
'list.tasks << Task.create(title: argument)',
'class person < ActiveRecord::Migration',
'row_hash.each {|k,v| vals[k.to_sym] = v}',
'puts "@patient_records is #{@patient_records}',
'CSV.foreach(file, headers: true) do |row|',
'self.tasks.select { |task| task.completed.nil? }',
]

var levelFiveLines = [
'git checkout -b BRICKMODE',
'Rake::Task["db:version"]',
'/(b|a+)*c/ =- s',
'Regexp.escape("\\*?{}.")',
'RSpec::Core::RakeTask.new(:specs)',
'<< File.dirname(__FILE__) + "db/migrate"',
'puts to_roman(468) == "CCCCLXVIII"',
'(1..6).partition { |v| v.even? }',
'regex = /[a-w&&[^c-g]z]/',
'@grids = Array.new(9) { Array.new }',
'|| (ENV["SCOPE"] == migration.scope)',
'RSpec::Core::RakeTask.new(:specs)',
'/[[:digit:]]/.match("\\u06F2")',
'/(?<foo>.)(?<bar>.)/.named_captures',
'[timestamp, args[:m_name]].join("_") + ".rb"',
'ENV["SCOPE"].blank? || ENV["SCOPE"]',
"{'val': 'New', 'onclick': 'createDoc()'}",
'puts table[1][3] == [14, 32, 7, 0, 23]',
'steps = (ENV["STEPS"] || 1).to_i',
'%w{ cat bear }.inject do |memo, word|',
'ENV["VERS"] ? ENV["VERS"].to_i : nil)',
'/I(?:n)ves(ti)ga\\1ons/',
'Time.now.strftime("%m/%d/%Y - %I:%M%p")',
'lines.slice_after(/(?<!\\)\\n\\z/)',
'p a.slice_when {|i, j| 6 < j - i }.to_a',
'/\\p{^Ll}/.match("A")',
'res = c.grep(/SEEK/) { |v| IO.const_get(v) }',
'dictionary_list << word.split(" ").sort!',
'(1..10).each_slice(3) { |a| p a }',
'/(?<=<b>)\\w+(?=<\\/b>)/',
'puts "Tree height: #{tree.height} feet"',
'row_hash.each {|k,v| vals[k.to_sym] = v}',
'nested_array = [ [1, 2], [3, 4], [5, 6] ]',
'attr_reader :all_rows, :all_columns, :all_grids',
'/(?<lhs>\\w+)\\s*=\\s*(?<rhs>\\w+)/',
'email_regex = /(?:[A-Z0-9-]+\\.)+/',
]
