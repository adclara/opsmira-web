<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid request body']);
    exit;
}

if (!empty($input['_gotcha'])) {
    http_response_code(200);
    echo json_encode(['ok' => true]);
    exit;
}

$name = filter_var($input['name'] ?? '', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$company = filter_var($input['company'] ?? '', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$email = filter_var($input['email'] ?? '', FILTER_SANITIZE_EMAIL);
$phone = filter_var($input['phone'] ?? '', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$preferredContact = filter_var($input['preferredContact'] ?? '', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$industry = filter_var($input['industry'] ?? '', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$requestVolume = filter_var($input['requestVolume'] ?? '', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$urgentOutcome = filter_var($input['urgentOutcome'] ?? '', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$problem = filter_var($input['problem'] ?? '', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$tools = filter_var($input['tools'] ?? '', FILTER_SANITIZE_FULL_SPECIAL_CHARS);

if (empty($name) || empty($email) || empty($problem)) {
    http_response_code(400);
    echo json_encode(['error' => 'Name, email, and problem description are required.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email address.']);
    exit;
}

$to = 'adrianclara@opsmira.ai';
$subject = 'OpsMira workflow audit request - ' . ($company ?: $name);

$body = "New OpsMira intake submission\n";
$body .= "==============================\n\n";
$body .= "Name: {$name}\n";
$body .= "Company: {$company}\n";
$body .= "Email: {$email}\n";
$body .= "Phone: {$phone}\n";
$body .= "Preferred contact: {$preferredContact}\n";
$body .= "Industry: {$industry}\n";
$body .= "Monthly request volume: {$requestVolume}\n";
$body .= "Most urgent outcome: {$urgentOutcome}\n\n";
$body .= "Primary workflow problem:\n{$problem}\n\n";
$body .= "Current tools / channels:\n{$tools}\n";

$headers = "From: noreply@opsmira.ai\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$sent = mail($to, $subject, $body, $headers);

if ($sent) {
    http_response_code(200);
    echo json_encode(['ok' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send. Please email us directly at adrianclara@opsmira.ai']);
}
